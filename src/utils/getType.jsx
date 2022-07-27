const getType = (type) => {
    let typeColor = ""
    if(type === 'fire'){
        typeColor = '#f14a4a'
    }else if(type === 'grass'){
        typeColor = '#a6f35d'
    }else if(type === 'water'){
        typeColor = '#89baf1'
    }else if(type === 'fighting'){
        typeColor = '#f3a65d'
    }else if(type === 'poison'){
        typeColor = '#8e4af1'
    }else if(type === 'ground'){
        typeColor = '#f1ad4a'
    }else if(type === 'rock'){
        typeColor = '#aba090'
    }else if(type === 'bug'){
        typeColor = '#cce34e'
    }else if(type === 'ghost'){
        typeColor = '#2f2439'
    }else if(type === 'steel'){
        typeColor = '#bfbfbf'
    }else if(type === 'electric'){
        typeColor = '#efec41'
    }else if(type === 'psychic'){
        typeColor = '#f965de'
    }else if(type === 'ice'){
        typeColor = '#c3ecee'
    }else if(type === 'dragon'){
        typeColor = '#59d09c'
    }else if(type === 'flying'){
        typeColor = '#fbe9cf'
    }else if(type === 'normal'){
        typeColor = '#d4e4ea'
    }else if(type === 'dark'){
        typeColor = '#4c6ba9'
    }else if(type === 'fairy'){
        typeColor = '#f2b4de'
    }

    return typeColor
}

export default getType