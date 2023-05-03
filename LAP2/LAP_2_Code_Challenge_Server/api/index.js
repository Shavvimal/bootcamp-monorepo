const app = require("./server");

const port = process.env.PORT || 443;

app.listen(port, () => console.log(`Express departed from port ${port}`))