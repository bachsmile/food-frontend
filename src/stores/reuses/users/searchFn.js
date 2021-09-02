
export default function (list, dk, data) {
    let it = []
    switch (dk) {
    case 'productName':
        it = list.filter(item => item.productName.search(data) >= 0)
        break
    case 'productCate':
        it = list.filter(item =>
            data ? item.productCate === data : list)
        break
    default:
        break
    }
    console.log(it)
    return { it }
}
