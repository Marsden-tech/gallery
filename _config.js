var config = {}

// Update to have your correct username and password
config.mongoURI = {
    production: 'mongodb+srv://marsden:MLwero@ip-cluster.uk5nb.mongodb.net/darkroom?retryWrites=true&w=majority&appName=IP-Cluster',
    development: 'mongodb+srv://marsden:MLwero@ip-cluster.uk5nb.mongodb.net/darkroom-dev?retryWrites=true&w=majority&appName=IP-Cluster',
    test: 'mongodb+srv://marsden:MLwero@ip-cluster.uk5nb.mongodb.net/darkroom-test?retryWrites=true&w=majority&appName=IP-Cluster',
}
module.exports = config;
