var userRoute = (router, expressApp, userMethods) => {
	router.get("/hello", userMethods.callHelloWorld);
	router.get("/search", userMethods.search);
	router.get("/getById", userMethods.searchById);
	router.post("/create", userMethods.create);
	return router;
};

const _userRoute = userRoute;
export { _userRoute as userRoute };
