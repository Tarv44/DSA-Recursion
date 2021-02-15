function charter(org, indent = '') {
    const names = Object.keys(org)
    for(let i = 0; i < names.length; i++) {
        console.log(indent + names[i])
        charter(org[names[i]], indent + '  ')
    }
}


const org = {
    Zuckerberg: {
        Schroepfer: {
            Bosworth: {
                Steve: {},
                Kyle: {},
                Andra: {}
            },  
            Zhao: {
                Richie: {},
                Sofia: {},
                Jen: {}
            }    
        },  
        Schrage: {
            VanDyck: {
                Sabrina: {},
                Michelle: {},
                Josh: {}
            },    
            Swain: {
                Blanch: {},
                Tom: {},
                Joe: {}
            }
        },    
        Sandberg: {
            Goler: {
                Eddie: {},
                Julie: {},
                Annie: {}
            }, 
            Hernandez: {
                Rowi: {},
                Inga: {},
                Morgan: {}
            },   
            Moissinac: {
                Amy: {},
                Chuck: {},
                Vinni: {}
            },  
            Kelley: {
                Eric: {},
                Ana: {},
                Wes: {}
            }     
        }      
    } 
}