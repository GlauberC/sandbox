import React, {Component} from 'react'
import Tree from 'react-tree-graph';
import 'react-tree-graph/dist/style.css'
import './css/graph2.css'
import * as d3 from "d3";
export default class Graph2 extends Component{
    constructor(){
        super()        
    }
    componentDidMount(){
        // this.test()
    }
   
    nodeHandle(e, nodeKey){
        console.log(nodeKey)
    }
    render(){
        return(
            <Tree
                data={this.data}
                height={850}
                width={900}
                gProps={{
                    onClick: this.nodeHandle
                }}/>
        )
    }
}