const projectCategories = [
    { 
        title: "Completed Projects",
        name: "completedProjects",
        icon: "bi bi-check-circle",
        titleColor: "#198754",
        navigationButtonClass: "btn btn-success my-2",
        projects: [
            {
                title:"Angular Front End",
                icon:"images/angularLogo.png",
                summary:`
                <p>
                    This implmentation was completed using <span class="techHighlight">Angular</span>.  A custom data service was developed for generic handling
                    of HTTP requests, and used to access the spot price API.  Authentication is managed through <span class="techHighlight">AngularFireAuth</span>
                    using the @angular/fire library and data access to the Asset database is managed through a <span class="techHighlight">AngularFireDatabase 
                    context</span>.  Authorization is accomplished simply by filtering results using the user's unique identifier stored in 
                    their respective Google Authentication table, to which every asset object references.  All requests to the database 
                    must reference that user's identifier or the service will return an empty set or null.  This application is currently being
                    hosted on <span class="techHighlight">Google Firebase</span>.
                </p>
                <p>
                    Some fun challenges in this implementation were building the <span class="techHighlight">custom generic HTTP data service</span>, building a custom 
                    pipe for rendering negative values in red and surrounded by parentheses by extending the existing currency pipe and 
                    enforcing a caching mechanism to ensure I didn't exceed my allotment of 250 monthly requests to the spot price service too 
                    quickly.
                </p>`,
                link: "https://assetauth-d104d.web.app/assets",
                name: "assetFB"
            }
        ]
    },
    { 
        title: "In Development",
        name: "inDevelopment",
        icon: "bi bi-cup-hot",
        titleColor: "#0d6efd",
        navigationButtonClass: "btn btn-primary my-2",
        projects: [
            {
                title:"React Front End w/ GraphQL",
                icon:"images/reactLogo.svg",
                summary:`
                <p>
                    Work is underway to develop a client using <span class="techHighlight">React</span> for the front end and 
                    <span class="techHighlight">GraphQL</span> for data access.  My current experience with GraphQL is through a <span class="techHighlight">Prisma</span>
                    client, so I will need to research to find a data client similar to <span class="techHighlight">AngularFireDatabase</span>, which I am willing
                    to bet exists in some capacity.  Additionally, I only have experience with React and GraphQL as separate entities.  So I am working 
                    on building a data access layer that my react client can use to access both the GraphQL context and the spot price API.  
                    Currently, I am not sure where I would host this, but as it will likely not be hosted by Google Firebase.  As a result I will need to ensure that 
                    <span class="techHighlight">Google Authenticate</span> is configured to support cross-domain users.
                </p>
                <p style="font-style:italic;">
                    <i class="bi bi-info-circle"></i> It is worth noting that the current URL for the Angular application is using Google's hosted url.  Once the cross-domain 
                    authentication problem is handled, I will then update the DNS in <span class="techHighlight">AWS Route 53</span>
                    for acecorban.me to use a proper subdomain and provide for a more cohesive user experience.
                </p>`,
                link: false,
                name: "react"
            }
        ]
    },
    { 
        title: "Future Plans",
        name: "futurePlans",
        icon: "bi bi-clock",
        titleColor: "#6c757d",
        navigationButtonClass: "btn btn-secondary my-2",
        projects: [
            {
                title:".Net Core API",
                icon:"images/netApiLogo.png",
                summary:`
                <p>
                    The next goal on the docket after completion of the React application will be to build a 
                    <span class="techHighlight">RESTful API</span> using <span class="techHighlight">ASP.NET Core</span>
                    coded in <span class="techHighlight">C#</span>.  Anticipated challenges will mostly revolve around 
                    authentication.  After completion of the React application, I'll have figured out cross-domain configuration
                    for <span class="techHighlight">Google Authenticate</span>, but I will need to research the C# libraries, which
                    should be straight-forward enough.  However, persistence of the user's identity will need to make use of 
                    <span class="techHighlight">JSON Web Tokens</span> as the API will be built in such a way that a vast variety of 
                    clients could consume and make requests to it.  I have experience with this already, so that shouldn't be an issue.
                    Additionally, I will need to learn the C# library for data access to <span class="techHighlight">Google Realtime Database</span>.
                    I don't anticipate any issues with the data once I have it, but if I discover that I need a strongly typed class in C# to 
                    parse the data, I may implement a <span class="techHighlight">Custom Data Store</span> that overrides the basic CRUD operations
                    of the <span class="techHighlight">Google Realtime Database Library</span>.  I have done this before with 
                    <span class="techHighlight">AWS Dynamo DB</span> as an exercise, so it should be relatively straight-forward.
                </p>`,
                link: false,
                name: "netAPI"
            },
            {
                title:"Android App",
                icon:"images/androidLogo.png",
                summary:`
                <p>
                    All that would remain is to build a client that consumes the .NET API.  While I could theoretically update all my 
                    existing clients to use it, I must remember that the purpose of this project is to demonstrate my ability to pick up
                    new technologies and integrate them.  This is where I will get my feet wet 
                    with Andriod development.  Currently, I only have some basic familiarization with Android app development using 
                    <span class="techHighlight">Kotlin</span> and <span class="techHighlight">Jetpack Compose</span>.  This will be my dessert
                    because I've wanted to get into phone app development for a long time.  But first things first, I need to finish my <a href="#inDevelopment">vegetables</a>.
                </p>`,
                link: false,
                name: "android"
            }            
        ]
    },
]

export default projectCategories

