import type { RequestHandler } from "@builder.io/qwik-city";

export const onGet: RequestHandler = async ({ send }) => {
  const response = getResponseFromExternalLib();

  send(response);
};

const getResponseFromExternalLib = (): Response => {
  const headers = new Headers();

  headers.append(
    "set-cookie",
    "cookie1=; Max-Age=2592000; Path=/; HttpOnly; SameSite=Lax"
  );

  headers.append(
    "set-cookie",
    "cookie2=; Max-Age=2592000; Path=/; HttpOnly; SameSite=Lax"
  );
  headers.append(
    "set-cookie",
    "cookie3=; Max-Age=2592000; Path=/; HttpOnly; SameSite=Lax"
  );

  return new Response(
    JSON.stringify({
      status: 200,
      message: "Request received",
      data: {},
    }),
    {
      status: 200,
      headers: headers,
    }
  );
};
