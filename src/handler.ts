import links from './constants/links';

export async function handleRequest(request: Request): Promise<Response> {
  const endpoint = request.url.split('/').pop();

  switch (endpoint) {
    case 'links':
      return new Response(JSON.stringify(links, null, 2), {
        headers: {
          'Content-Type': 'application/json',
        },
      });
    default:
      return new Response(null, {
        status: 404,
      });
  }
}
