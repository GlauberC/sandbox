import React, {Component} from 'react'
import * as d3 from "d3";
import './css/graph.css'

export default class Graph extends Component{
    constructor(){
        super()
        this.margin = {top: 20, right: 120, bottom: 20, left: 120}
        this.width = 960 - this.margin.right - this.margin.left
        this.height = 500 - this.margin.top - this.margin.bottom;
        this.tree = d3.layout.tree()
            .size([this.height, this.width]);

        
        this.diagonal = d3.svg.diagonal()
            .projection(function(d) { return [d.y, d.x]; });
        this.state = {
            treeData: [
                {
                  "name": "Top Level",
                  "parent": "null",
                  "children": [
                    {
                      "name": "Level 2: A",
                      "parent": "Top Level",
                      "children": [
                        {
                          "name": "Son of A",
                          "parent": "Level 2: A"
                        },
                        {
                          "name": "Daughter of A",
                          "parent": "Level 2: A"
                        }
                      ]
                    },
                    {
                      "name": "Level 2: B",
                      "parent": "Top Level"
                    }
                  ]
                }
              ]
        }
    }
    componentDidMount(){
        this.plotTree()
    }

    plotTree(){
        nd3.select(".graphsvg").append('svg')
            .attr('class','svg')
            .attr("width", this.width + this.margin.right + this.margin.left)
            .attr("height", this.height + this.margin.top + this.margin.bottom)
            .append("g")
            .attr("transform", "translate(" + this.margin.left + "," + this.margin.top + ")");
        
        this.duration = 750
        this.root = this.state.treeData[0];
        this.root.x0 = this.height / 2;
        this.root.y0 = 0;
        this.update(this.root)
    }
    update(source){
        var svg = d3.select(".svg")
        var diagonal = d3.svg.diagonal()
	        .projection(function(d) { return [d.y, d.x]; })
        var i = 0
        
        var nodes = this.tree.nodes(this.root).reverse(),
            links = this.tree.links(nodes);

        nodes.forEach(function(d) { d.y = d.depth * 180; });

        var node = svg.selectAll("g.node")
            .data(nodes, function(d) { return d.id || (d.id = ++i); });

        var nodeEnter = node.enter().append("g")
            .attr("class", "node")
            .attr("transform", function(d) { 
                return "translate(" + d.y + "," + d.x + ")"; });

        nodeEnter.append("circle")
            .attr("r", function(d) { return d.value; })
            .style("stroke", function(d) { return d.type; })
            .style("fill", function(d) { return d.level; });

        nodeEnter.append("text")
            .attr("x", function(d) { 
                return d.children || d._children ? 
                (d.value + 4) * -1 : d.value + 4 })
            .attr("dy", ".35em")
            .attr("text-anchor", function(d) { 
                return d.children || d._children ? "end" : "start"; })
            .text(function(d) { return d.name; })
            .style("fill-opacity", 1);

        var link = svg.selectAll("path.link")
            .data(links, function(d) { return d.target.id; });

        link.enter().insert("path", "g")
            .attr("class", "link")
            .style("stroke", function(d) { return d.target.level; })
            .attr("d", diagonal);
      
    }


    render(){
        return(
            <div className = 'graphsvg'></div>
        )
    }
}
