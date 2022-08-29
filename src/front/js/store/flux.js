const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: null,
			
		},
		actions: {
			// Use getActions to call a function within a fuction
			syncTokenFromSessionStorage: () => {
				const token = sessionStorage.getItem("token");
				console.log(
				  "application just loaded, syncing the session storage token"
				);
				if (token && token != "" && token != undefined)
				  setStore({ token: token });
			  },

			  login: async (email, password) => {
				const opts = {
				  method: "POST",
				  headers: {
					"Content-Type": "application/json",
				  },
				  body: JSON.stringify({
					email: email,
					password: password,
				  }),
				};
		
				try {
				  const resp = await fetch(
					process.env.BACKEND_URL,
					opts
				  );
				  if (resp.status !== 200) {
					alert("there has been some error");
					return false;
				  }
		
				  const data = await resp.json();
				  console.log("this came from the backend", data);
				  sessionStorage.setItem("token", data.access_token);
				  setStore({ token: data.access_token });
				  return true;
				} catch (error) {
				  console.error("There has been an error logging in");
				}
			  },
		}
	};
};

export default getState;
