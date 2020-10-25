import links from './constants/links';
import {
  AvatarTransformer,
  BodyTransformer,
  LinksTransformer,
  NameTransformer,
  ProfileTransformer,
  SocialTransformer,
  TitleTransformer,
} from './transformers';

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

    return new HTMLRewriter()
      .on('div#links', new LinksTransformer())
      .on('div#profile', new ProfileTransformer())
      .on('img#avatar', new AvatarTransformer())
      .on('h1#name', new NameTransformer())
      .on('div#social', new SocialTransformer())
      .on('title', new TitleTransformer())
      .on('body', new BodyTransformer())
      .transform(response);
  }
}
