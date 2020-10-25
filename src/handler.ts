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
    const response = await fetch(
      'https://static-links-page.signalnerve.workers.dev',
      {
        method: 'GET',
      },
    );

    const html = await response.text();

    return new Response(html, {
      headers: {
        'Content-Type': 'text/html',
      },
    });
  }
}
