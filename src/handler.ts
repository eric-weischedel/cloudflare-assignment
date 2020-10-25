import links from './constants/links';

class LinksTransformer {
  element(element: Element) {
    for (const link of links) {
      element.append(`<a href="${link.url}">${link.name}</a>`, {
        html: true,
      });
    }
  }
}

class ProfileTransformer {
  element(element: Element) {
    element.removeAttribute('style');
  }
}

class NameTransformer {
  element(element: Element) {
    element.setInnerContent('eric-weischedel');
  }
}

class AvatarTransformer {
  element(element: Element) {
    element.setAttribute(
      'src',
      'https://scontent.fagc1-2.fna.fbcdn.net/v/t1.0-9/91829783_2844335425683437_8923657936060809216_o.jpg?_nc_cat=107&ccb=2&_nc_sid=09cbfe&_nc_ohc=K7ljl16kzxAAX8pR1cl&_nc_ht=scontent.fagc1-2.fna&oh=151bfc80b56dd93cc9190d16587caca6&oe=5FB951B9',
    );
  }
}

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
      .transform(response);
  }
}
