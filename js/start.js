	function start(error,data){

	    if(error){
	    	console.log(error);
	    }
		
		data_sort=data;

		/** Set up scales **/
  		xEmp.domain([0, d3.max(data_sort, function(d) { return parseFloat(d.Emp); })]);
  		xUnemp.domain([0,d3.max(data_sort, function(d) { return  parseFloat(d.Unemp); })]);
      xBroadLabUnder.domain([0, d3.max(data_sort, function(d) { return parseFloat(d.BroadLabUnder); })]);
  		xEarnQual.domain([0, d3.max(data_sort, function(d) { return  parseFloat(d.EarnQual); })]);
  		xLabMarkSec.domain([0, d3.max(data_sort, function(d) { return  parseFloat(d.LabMarkSec); })]);
  		xJobStrain.domain([0, d3.max(data_sort, function(d) { return  parseFloat(d.JobStrain); })]);
  		/**xLongHours.domain([0, d3.max(data_sort, function(d) { return  parseFloat(d.LongHours); })]);**/
  		xLowIncome.domain([0, d3.max(data_sort, function(d) { return  parseFloat(d.LowIncome); })]);
  		xGenderIneq.domain([0, d3.max(data_sort, function(d) { return  parseFloat(d.GenderIneq); })]);
  		xEmplGap.domain([0, d3.max(data_sort, function(d) { return  parseFloat(d.EmplGap); })]);

		chart.attr("height", barHeight * data.length);
		

    /** rectangle to underline selected country**/
    chart.append("rect")
      .attr("class","highlight")
      .attr("x",0)
      .attr("y",0)
      .attr("width",overallwidth)
      .attr("height",barHeight)
      .attr("fill","#fec8d7")
      .attr("opacity",0.75)
      .attr("visibility","hidden");

		var bar = chart.selectAll("bar")
      		.data(data_sort)
    		.enter();
		

		bar.append("text")
      		.attr("class","Name")
          .attr("id",function(d){ return d.Country.replace(/\s+/g, '');  })
      		.attr("x", 0)
      		.attr("y", function(d, i) { return  i * barHeight ; })
      		.attr("dy", "0.75em")
      		.text(function(d) { return d.Country; })

    	bar.append("rect")
    		.attr("class",function(d){return "Emp"+" "+d.Country.replace(/\s+/g, '');  }) //remove space fro name to facilitate selection
    		.attr("x",1*width)
    		.attr("y",function(d, i) { return  i * barHeight ; })
    		.attr("width", function(d) { return xEmp(d.Emp); })
      		.attr("height", barHeight -1)
      		.attr("fill",function(d){
      			if(d.Country=="OECD"){
      				return "#0B1E2D"
      			}else{
      				return colorScale(assignSector("Emp"));
      			}
      		})
      		.attr("opacity",function(d){
      			return opacityIndicator(d.Emp,d.Country,"Emp");
      		});


      	bar.append("rect")
      		.attr("class",function(d){return "Unemp"+" "+d.Country.replace(/\s+/g, '');  })
    		.attr("x",2*width)
    		.attr("y",function(d, i) { return  i * barHeight ; })
      		.attr("width", function(d) { return xUnemp(d.Unemp); })
      		.attr("height", barHeight -1)
      		.attr("fill",function(d){
      			if(d.Country=="OECD"){
      				return "#0B1E2D"
      			}else{
      				return colorScale(assignSector("Unemp"));
      			}
      		})
      		.attr("opacity",function(d){
      			return opacityIndicator(d.Unemp,d.Country,"Unemp");
      		});

      bar.append("rect")
        .attr("class",function(d){return "BroadLabUnder"+" "+d.Country.replace(/\s+/g, '');  }) //remove space fro name to facilitate selection
        .attr("x",3*width)
        .attr("y",function(d, i) { return  i * barHeight ; })
        .attr("width", function(d) { return xBroadLabUnder(d.BroadLabUnder); })
          .attr("height", barHeight -1)
          .attr("fill",function(d){
            if(d.Country=="OECD"){
              return "#0B1E2D"
            }else{
              return colorScale(assignSector("BroadLabUnder"));
            }
          })
          .attr("opacity",function(d){
            return opacityIndicator(d.BroadLabUnder,d.Country,"BroadLabUnder");
          });


      	bar.append("rect")
      		.attr("class",function(d){return "EarnQual"+" "+d.Country.replace(/\s+/g, '');  })
    		.attr("x",4*width)
    		.attr("y",function(d, i) { return  i * barHeight ; })
      		.attr("width", function(d) { return xEarnQual(d.EarnQual); })
      		.attr("height", barHeight -1)
      		.attr("fill",function(d){
      			if(d.Country=="OECD"){
      				return "#0B1E2D"
      			}else{
      				return colorScale(assignSector("EarnQual"));
      			}
      		})
      		.attr("opacity",function(d){
      			return opacityIndicator(d.EarnQual,d.Country,"EarnQual");
      		});      	

      	bar.append("rect")
      		.attr("class",function(d){return "LabMarkSec"+" "+d.Country.replace(/\s+/g, '');  })
    		.attr("x",5*width)
    		.attr("y",function(d, i) { return  i * barHeight ; })
      		.attr("width", function(d) { return xLabMarkSec(d.LabMarkSec); })
      		.attr("height", barHeight -1)
      		.attr("fill",function(d){
      			if(d.Country=="OECD"){
      				return "#0B1E2D"
      			}else{
      				return colorScale(assignSector("LabMarkSec"));
      			}
      		})
      		.attr("opacity",function(d){
      			return opacityIndicator(d.LabMarkSec,d.Country,"LabMarkSec");
      		});      	

      	bar.append("rect")
      		.attr("class",function(d){return "JobStrain"+" "+d.Country.replace(/\s+/g, '');  })
    		.attr("x",6*width)
    		.attr("y",function(d, i) { return  i * barHeight ; })
      		.attr("width", function(d) { return xJobStrain(d.JobStrain); })
      		.attr("height", barHeight -1)
      		.attr("fill",function(d){
      			if(d.Country=="OECD"){
      				return "#0B1E2D"
      			}else{
      				return colorScale(assignSector("JobStrain"));
      			}
      		})
      		.attr("opacity",function(d){
      			return opacityIndicator(d.JobStrain,d.Country,"JobStrain");
      		});      	

      	/**bar.append("rect")
      		.attr("class",function(d){return "LongHours"+" "+d.Country.replace(/\s+/g, '');  })
    		.attr("x",7*width)
    		.attr("y",function(d, i) { return  i * barHeight ; })
      		.attr("width", function(d) { return xLongHours(d.LongHours); })
      		.attr("height", barHeight -1)
      		.attr("fill",function(d){
      			if(d.Country=="OECD"){
      				return "#0B1E2D"
      			}else{
      				return colorScale(assignSector("LongHours"));
      			}
      		})
      		.attr("opacity",function(d){
      			return opacityIndicator(d.LongHours,d.Country,"LongHours");
      		});  **/      	

      	bar.append("rect")
      		.attr("class",function(d){return "LowIncome"+" "+d.Country.replace(/\s+/g, '');  })
    		.attr("x",7*width)
    		.attr("y",function(d, i) { return  i * barHeight ; })
      		.attr("width", function(d) { return xLowIncome(d.LowIncome); })
      		.attr("height", barHeight -1)
      		.attr("fill",function(d){
      			if(d.Country=="OECD"){
      				return "#0B1E2D"
      			}else{
      				return colorScale(assignSector("LowIncome"));
      			}
      		})
      		.attr("opacity",function(d){
      			return opacityIndicator(d.LowIncome,d.Country,"LowIncome");
      		});      	

      	bar.append("rect")
      		.attr("class",function(d){return "GenderIneq"+" "+d.Country.replace(/\s+/g, '');  })
    		.attr("x",8*width)
    		.attr("y",function(d, i) { return  i * barHeight ; })
      		.attr("width", function(d) { return xGenderIneq(d.GenderIneq); })
      		.attr("height", barHeight -1)
      		.attr("fill",function(d){
      			if(d.Country=="OECD"){
      				return "#0B1E2D"
      			}else{
      				return colorScale(assignSector("GenderIneq"));
      			}
      		})
      		.attr("opacity",function(d){
      			return opacityIndicator(d.GenderIneq,d.Country,"GenderIneq");
      		});      	

      	bar.append("rect")
      		.attr("class",function(d){return "EmplGap"+" "+d.Country.replace(/\s+/g, '');  })
    		.attr("x",9*width)
    		.attr("y",function(d, i) { return  i * barHeight ; })
      		.attr("width", function(d) { return xEmplGap(d.EmplGap); })
      		.attr("height", barHeight -1)
      		.attr("fill",function(d){
      			if(d.Country=="OECD"){
      				return "#0B1E2D"
      			}else{
      				return colorScale(assignSector("EmplGap"));
      			}
      		})
      		.attr("opacity",function(d){
      			return opacityIndicator(d.EmplGap,d.Country,"EmplGap");
      		});  


      	addTitle(); // add the indicators title
      	addLegend();// add the sector legend 
        sortChart("Emp"); //Start with everything sorted by Employment dimension
	    
	    ///////////////////////////////////////////////////////////////////////////
	    ////////////////////////////// Add Tooltip ////////////////////////////////
	    ///////////////////////////////////////////////////////////////////////////

	   var tooltipWrapper = chart.append("g")
	      .attr("class", "tooltip-wrapper")
	      .attr("transform", "translate(" + 0 + "," + 0 + ")")
	      .style("opacity", 0);

	    var tooltipBackground = tooltipWrapper.append("rect")
	      .attr("class", "tooltip-background")
	      .attr("x", 0)
	      .attr("y", 10)
	      .attr("width", 0)
	      .attr("height", 105);
	    
	    var tooltipCountry = tooltipWrapper.append("text")
	      .attr("class", "tooltip-country")
	      .attr("id", "tooltipCountry")
	      .attr("y", 35)
	      .text("");

      var tooltipDim = tooltipWrapper.append("text")
        .attr("class", "tooltip-dim")
        .attr("id", "tooltipDim")
        .attr("y", 50)
        .text("");

	    var tooltipValue = tooltipWrapper.append("text")
	      .attr("class", "tooltip-value")
	      .attr("id", "tooltipValue")
	      .attr("y", 70)
	      .text("");

      var tooltipEvo= tooltipWrapper.append("text")
        .attr("class", "tooltip-evo")
        .attr("id", "tooltipEvo")
        .attr("y", 85)
        .text("");

      var tooltipEvoArrow= tooltipWrapper.append("image")
        .attr("class", "tooltip-evo-arrow")
        .attr("id", "tooltipEvoArrow")
        .attr("x", 0)
        .attr("y", 90)
        .attr("width", "20")
        .attr("height", "20");

	    ///////////////////////////////////////////////////////////////////////////
	    ////////////////////////////// End Tooltip ////////////////////////////////
	    ///////////////////////////////////////////////////////////////////////////

		bar.selectAll("rect")
			.on("mouseover",function(d){
				var indicator = d3.select(this).attr("class")
				indicator=indicator.split(' ')[0]

        d3.selectAll(".highlight")
        .attr("y",d3.select(this).attr("y"))
        .attr("visibility","visible");

				countryName="."+d.Country;
				countryName=countryName.replace(/\s+/g, '')
				
        countryTitle="#"+d.Country.replace(/\s+/g, '');

        var yearCode = "Y"+indicator;
        yearToolTip=d[yearCode];

				/**d3.selectAll(countryName)
				.style('stroke',"#000000")
				.style('stroke-width',"4px");**/
        
       d3.selectAll(countryTitle)
        .style("font-weight","bold")

				tooltipDim.text(function(d){
	            	if (indicator=="Emp")
	            		return "Employment (" + yearToolTip +")";
	            	if (indicator=="EmpFTI")
	            		return "Employment in full-time equivalent units (" + yearToolTip +")";
	            	if (indicator=="Unemp")
	            		return "Unemployment (" + yearToolTip +")";
	            	if (indicator=="EarnQual")
	            		return "Earnings quality (" + yearToolTip +")" ;
	            	if (indicator=="LabMarkSec")
	            		return "Labour market insecurity (" + yearToolTip +")" ;
	            	if (indicator=="JobStrain")
	            		return "Job strain (" + yearToolTip +")" ;
	            	/**if (indicator=="LongHours")
	            		return "Very long-hours of work (" + yearToolTip +")" ;**/
	            	if (indicator=="LowIncome")
	            		return "Low income rate (" + yearToolTip +")" ;
	            	if (indicator=="GenderIneq")
	            		return "Gender labour income gap (" + yearToolTip +")" ;
	            	if (indicator=="EmplGap")
	            		return "Employment gap for disadvantaged groups (" + yearToolTip +")" ;

	            });

        tooltipCountry.text(d.Country);
        tooltipValue.text(function(){
            if (indicator=="EarnQual")
              return format(d[indicator]) + " USD";
            else if  (indicator=="EmplGap")
              return format(d[indicator]) + "%";
            else
              return format(d[indicator]) + "%";
        });
        
        var evoCode = "evo"+indicator;

        tooltipEvo.text("Evolution since 2006" );//+ d[evoCode] );
    

    if(d[evoCode]=="down")
      tooltipEvoArrow.attr("xlink:href", "img/arrow-with-circle-down.svg")
    else if (d[evoCode]=="up")
      tooltipEvoArrow.attr("xlink:href", "img/arrow-with-circle-up.svg")
    else if (d[evoCode]=="stable")
      tooltipEvoArrow.attr("xlink:href", "img/arrow-with-circle-right.svg")
    else
      tooltipEvoArrow.attr("xlink:href", "img/dots-three-horizontal.svg")


        //Find the largest title
        var maxSize = Math.max(document.getElementById("tooltipDim").getComputedTextLength(), document.getElementById("tooltipValue").getComputedTextLength(),document.getElementById("tooltipCountry").getComputedTextLength(),document.getElementById("tooltipEvo").getComputedTextLength());

        tooltipBackground
            .transition().duration(100)
            .attr("x", -0.5 * maxSize*1.2)
            .attr("width", maxSize*1.2);

        if(d3.select(this).attr("x") < 3*width) {

        	var xPosition=2*width;
        	
        	if (d3.select(this).attr("y") < 25) {

	            tooltipWrapper
	                .transition().duration(200)
	                .attr("transform", "translate(" + xPosition + "," + 25 + ")")
	                .style("opacity", 1);

        	} else if (d3.select(this).attr("y") > limit) {
        		
	            tooltipWrapper
	                .transition().duration(200)
	                .attr("transform", "translate(" + xPosition + "," + limit + ")")
	                .style("opacity", 1);

        	}else{
        		
	            tooltipWrapper
	                .transition().duration(200)
	                .attr("transform", "translate(" + xPosition + "," + d3.select(this).attr("y") + ")")
	                .style("opacity", 1);

        	}

        } else if (d3.select(this).attr("x") +maxSize > overallwidth) {
        	var xPosition= d3.select(this).attr("x") -maxSize/2;
        	if(d3.select(this).attr("y") < 25){
        		
	            tooltipWrapper
	                .transition().duration(200)
	                .attr("transform", "translate(" + xPosition + "," + 25 + ")")
	                .style("opacity", 1);

        	}else if (d3.select(this).attr("y") > limit){
        		
	            tooltipWrapper
	                .transition().duration(200)
	                .attr("transform", "translate(" + xPosition + "," + limit + ")")
	                .style("opacity", 1);

        	}else{
        		
	            tooltipWrapper
	                .transition().duration(200)
	                .attr("transform", "translate(" + xPosition + "," + d3.select(this).attr("y") + ")")
	                .style("opacity", 1);

        	}

        } else {
        	if(d3.select(this).attr("y") < 25 ){
        		
	            tooltipWrapper
	                .transition().duration(200)
	                .attr("transform", "translate(" + d3.select(this).attr("x") + "," + 25 + ")")
	                .style("opacity", 1);

        	}else if (d3.select(this).attr("y") > limit){

	            tooltipWrapper
	                .transition().duration(200)
	                .attr("transform", "translate(" + d3.select(this).attr("x") + "," + limit + ")")
	                .style("opacity", 1);
        	}else{
        		
	            tooltipWrapper
	                .transition().duration(200)
	                .attr("transform", "translate(" + d3.select(this).attr("x") + "," + d3.select(this).attr("y") + ")")
	                .style("opacity", 1);


        	}
        }

			})
			.on("mouseout",function(d){
        d3.selectAll(".highlight")
          .attr("visibility","hidden");



				countryName="."+d.Country;
				countryName=countryName.replace(/\s+/g, '')
				
        countryTitle="#"+d.Country.replace(/\s+/g, '');

        var indicator = d3.select(this).attr("class")
				indicator=indicator.split(' ')[0];

				/**d3.selectAll(countryName)
      				.style("stroke","none");**/

        d3.selectAll(countryTitle)
              .style("font-weight","normal")
              
	            //Hide the tooltip
	            tooltipWrapper
	                .transition().duration(200)
	                .style("opacity", 0);
			});
    };