import { SIGNIN } from "../types/rootTypes";

export const signIn = (user) => {
	console.log({ action: user });
	return { type: SIGNIN, data: user };
};
