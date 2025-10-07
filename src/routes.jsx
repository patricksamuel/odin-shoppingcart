import Index from "./routes/index";
import Root from "./routes/root"
import Shop from "./routes/shop";
import Carte from "./routes/carte";




const routes = [  
    {
            path: "/",
            element: <Root />,
            //errorElement : < ErrorPage />,
            //loader: rootLoader,
            //action: rootAction,
            children : [
                {
                    index : true,
                    element : <Index />
                },
                {
                    path : "shop",
                    element : <Shop />
                    /*
                    loader : contactLoader,
                    action : contactAction,
                    */
                },
                {
                    path : "cart",
                    element : <Carte />
                    /*
                    loader : contactLoader,
                    action : contactAction,
                    */
                }
            
            ]
        }
    ]
export default routes;

