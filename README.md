Implementation of Data Warehousing System
1. Data System
Data is available in json format and stored as json files. For this task json files are stored into the file directory directly. 
Json server or axiom server can be used as a database server for small amount of data.
Depending on the availability, db systems can be mounted through services such as MongoDB, firebase, Postgress etc. 
In order to access the data and store the operations db services provide a flexible platform.

2. Implementation
In order to implement this system, React.js is used due to its flexible reactive nature at the client side. The application implementation takes simple steps as explained below.:
Two Reactive components are used for showing each Product and Inventory list and deploying to DOM through the App component. Componets are implemented using class componets which follows a standard mechanism. However due to availability of html to the client functional compoents are introduced to provide better security.
ListInventoryComponent and ListProductComponent both includes operations to mount data, delete data based on user transactions and a jsx div to render to the page as a html to the browser.
However, these components can be divided into several components in order to adhere reusability.
For example, inventory and product div can be implemented in a seperate component so that they can be used in the later tasks such as implementation of dashboard.
Instead of loading the data from each page Navigation bar can be implemented as a seperate component as a Header.

3. Services
Operations to load and delete items based on the user transactions are implemented in the service layer as backend tasks. These operations performs tasks by getting data from json files, and imported to components as a service.
