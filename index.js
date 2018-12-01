// Preparation "decode" and "assemblyComponent" method
const decode = (str) => {
    if (typeof  str !== 'string') return str

    str = str.replace(/\+/g, ' ')
    str =str.trim()
    try {
        str = decodeURIComponent(str)
    } catch(e) {

    }
    return str
}

const assemblyComponent = (key, val, ret) => {
    key = decode(key)
    val = decode(val)

    if (key !== '') {
        Object.assign(ret, {
            [key]: ret[key] === undefined ? val : [].concat(ret[key], val)
        })
    }
}

const parse = search => {
    /*
    * @description query string for location.search
    * @params search
    * @return object
    */
    if (typeof search !== 'string') {
        return Object.create(null)
    }

    search = search.trim().replace(/^[?#&]/, '')

    const arr = search.split('&')

    return arr.reduce((cur, pre) => {
        if (pre === '') {
            // skip
            return cur
        }

        const segIndex = pre.indexOf('=')

        if (segIndex === -1) {
            const key = pre

            // Missing `=` should be `null`:
            // http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
            const val = null

            assemblyComponent(key, val, cur)
        } else if (segIndex === 0) {
            // skip when (key === '')
        } else if (segIndex > 0) {
            const key = pre.slice(0, segIndex)
            const val = pre.slice(segIndex + 1)

            assemblyComponent(key, val, cur)
        }
        return cur
    }, Object.create(null))
}

export default {
    parse,
}

export { parse as queryStringParse }
