
const dateNow = () => {

    let currnetDate = new Date()
    let options = {
        weekday:'long',
        month:'long',
        day:'numeric',
        year:'numeric'
    }

    let formatDate = currnetDate.toLocaleDateString('en-us',options)

    return formatDate
};

export default dateNow;