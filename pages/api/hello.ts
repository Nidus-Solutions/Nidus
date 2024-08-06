import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  username?: string,
  urlImg?: string,
  company?: string,
  message?: string,
}

type RequestData = {
  username: string,
  email: string,
  password: string,
  urlImg: string,
  company: string,
}

const handler = (req: NextApiRequest, res: NextApiResponse<ResponseData>) => {
  const data: RequestData = req.body;

  if (req.method === "GET") {
    res.status(200).json({ message: "Hello World" });
  }

  const pass = "123456";

  if (data.password !== pass) {
    console.log(data);
    res.status(400).json({ message: "Senha incorreta" });
    return;
  }

  if (req.method === "POST") {
    console.log(data);
    res.status(200).json({
      username: data.username,
      urlImg: data.urlImg,
      company: data.company,
    });
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }


  
}

export default handler;
