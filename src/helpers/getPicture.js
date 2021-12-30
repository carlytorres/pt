const getPicture = ({ path, extension } ) => {
    return path.concat('.', extension)
}

export default getPicture