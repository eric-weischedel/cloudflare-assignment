import links from './constants/links';

export async function handleRequest(request: Request): Promise<Response> {
  const url = new URL(request.url);

  if (url.pathname === '/links') {
    return new Response(JSON.stringify(links, null, 2), {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } else {
    return new Response(null, {
      status: 404,
    });
  }
}
