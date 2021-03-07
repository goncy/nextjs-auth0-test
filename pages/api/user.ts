import {NextApiHandler, NextApiRequest, NextApiResponse} from "next";
import {withApiAuthRequired, getSession} from "@auth0/nextjs-auth0";

const handler: NextApiHandler = (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case "GET": {
      const {user} = getSession(req, res);

      return res.json({protected: "My Secret", id: user.sub});
    }

    default: {
      return res.status(404).json({error: "Not found"});
    }
  }
};

export default withApiAuthRequired(handler);
