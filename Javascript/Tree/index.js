
var createB = (parent,  content, name = '') => {
    let newObj = {
        name: name,
        parent: parent,
        content: content,
        children: []
    }
    return newObj
}
contains = (name)

var findB = (name, tree) => {
    if(name === tree.name){
        return tree
    }else{
        if(tree.children.length > 0){
            return findB(name , tree.children.filter((b) => 
                name.startsWith(b.name)
            )[0])
        }
    }
}

var addB = (branch, tree) => {
    let parentBranch = findB(branch.parent, tree)
    if(parentBranch.children.length === 0){
        branch.name = parentBranch.name + '.0'
        parentBranch.children.push(branch)
        return tree
    }else{
        if(parentBranch.children.filter(b => branch.content === b.content).length > 0){
            return tree
        }else{
            branch.name = parentBranch.name + '.' + parentBranch.children.length
            parentBranch.children.push(branch)
            return tree
        }
    }
}

try {
    var branch1 = createB('X', 'Conteudo1', '0')
    var branch2 = createB('0', 'Conteudo2')
    var branch3 = createB('0.0', 'Conteudo3')
    var branch31 = createB('0.0', 'Conteudo3')
    var branch4 = createB('0.0', 'Conteudo4')
    var branch5 = createB('0.0', 'Conteudo5')
    var tree = branch1
    tree = addB(branch2, tree)
    tree = addB(branch3, tree)
    tree = addB(branch31, tree)
    tree = addB(branch4, tree)
    tree = addB(branch5, tree)
    console.log(tree)

    // var branch6 = createB('0', 'X', 'Conteudo')
    // var branch7 = createB('0', 'X', 'Conteudo')

}catch(err){
    console.log(err)
}
