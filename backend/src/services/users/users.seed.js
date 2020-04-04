module.exports = app => {
    const service = app.service('users');
    service.find({}).then(res => {
        console.log(res)
        if (res.total === 0) {
            console.log('No users in database. Creating admin user')
            return service.create({ username: 'admin', password: 'password' });
        }
    }).catch(err => {
        console.error(`Creating admin user failed`, err.message)
    })

}