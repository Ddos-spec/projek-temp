import { NextRequest, NextResponse } from 'next/server';

// Force dynamic for API routes in static export
export const dynamic = 'force-dynamic';

interface DeployRequest {
  action: string;
  article_id?: number;
  project?: string;
}

// POST method - Handle deploy webhook
export async function POST(request: NextRequest) {
  try {
    const body: DeployRequest = await request.json();
    
    // Validate input data
    if (!body.action || typeof body.action !== 'string') {
      return NextResponse.json(
        {
          success: false,
          message: 'Action is required and must be a string'
        },
        { status: 400 }
      );
    }
    
    // Log the deploy action (in production, you might want to use a proper logging service)
    console.log('Deploy webhook received:', {
      action: body.action,
      article_id: body.article_id,
      project: body.project,
      timestamp: new Date().toISOString()
    });
    
    // Handle different actions
    switch (body.action) {
      case 'article_created':
        // You can add specific logic here for when an article is created
        // For example: send notifications, trigger cache invalidation, etc.
        console.log(`Article ${body.article_id} created successfully`);
        break;
        
      case 'article_updated':
        console.log(`Article ${body.article_id} updated successfully`);
        break;
        
      case 'article_deleted':
        console.log(`Article ${body.article_id} deleted successfully`);
        break;
        
      default:
        console.log(`Unknown action: ${body.action}`);
    }
    
    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: 'Deploy triggered successfully',
        data: {
          action: body.action,
          processed_at: new Date().toISOString()
        }
      },
      { status: 200 }
    );
    
  } catch (error) {
    // Handle JSON parsing errors
    if (error instanceof SyntaxError) {
      return NextResponse.json(
        {
          success: false,
          message: 'Invalid JSON format in request body'
        },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to process deploy webhook',
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

// GET method - Health check for the deploy endpoint
export async function GET() {
  return NextResponse.json(
    {
      success: true,
      message: 'Deploy webhook endpoint is active',
      timestamp: new Date().toISOString()
    },
    { status: 200 }
  );
}

