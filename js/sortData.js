	function sortChart(topicSelected){

    	sortItems = function (a, b) {
            return b[topicSelected] - a[topicSelected];
        }
	    	//data_sort.sort(function(a, b) { return a[topicSelected] - b[topicSelected]; });

	    chart.selectAll(".Name")
			.sort(sortItems)
			.transition()
  			.delay(function (d, i) {
        		return i * 10;
    		})
        	.duration(100)
			.attr("y",function(d, i) { return  i * barHeight ; });


		chart.selectAll(".Emp")
			.sort(sortItems)
			.transition()
  			.delay(function (d, i) {
        		return i * 10;
    		})
        	.duration(100)
			.attr("y",function(d, i) { return  i * barHeight ; });
		
		chart.selectAll(".BroadLabUnder")
			.sort(sortItems)
			.transition()
  			.delay(function (d, i) {
        		return i * 10;
    		})
        	.duration(100)
			.attr("y",function(d, i) { return  i * barHeight ; });

		chart.selectAll(".Unemp")
			.sort(sortItems)
			.transition()
  			.delay(function (d, i) {
        		return i * 10;
    		})
        	.duration(100)
			.attr("y",function(d, i) { return  i * barHeight ; });

		chart.selectAll(".EarnQual")
			.sort(sortItems)
			.transition()
  			.delay(function (d, i) {
        		return i * 10;
    		})
        	.duration(100)
			.attr("y",function(d, i) { return  i * barHeight ; });

		chart.selectAll(".LabMarkSec")
			.sort(sortItems)
			.transition()
  			.delay(function (d, i) {
        		return i * 10;
    		})
        	.duration(100)
			.attr("y",function(d, i) { return  i * barHeight ; });

		chart.selectAll(".JobStrain")
			.sort(sortItems)
			.transition()
  			.delay(function (d, i) {
        		return i * 10;
    		})
        	.duration(100)
			.attr("y",function(d, i) { return  i * barHeight ; });

		chart.selectAll(".LongHours")
			.sort(sortItems)
			.transition()
  			.delay(function (d, i) {
        		return i * 10;
    		})
        	.duration(100)
			.attr("y",function(d, i) { return  i * barHeight ; });

		chart.selectAll(".LowIncome")
			.sort(sortItems)
			.transition()
  			.delay(function (d, i) {
        		return i * 10;
    		})
        	.duration(100)
			.attr("y",function(d, i) { return  i * barHeight ; });

		chart.selectAll(".GenderIneq")
			.sort(sortItems)
			.transition()
  			.delay(function (d, i) {
        		return i * 10;
    		})
        	.duration(100)
			.attr("y",function(d, i) { return  i * barHeight ; });

		chart.selectAll(".EmplGap")
			.sort(sortItems)
			.transition()
  			.delay(function (d, i) {
        		return i * 10;
    		})
        	.duration(100)
			.attr("y",function(d, i) { return  i * barHeight ; });


		//var indicator = d3.select(this).attr("class")
		//		indicator=indicator.split(' ')[0]
		title.selectAll("rect")
		.style("opacity", function(d){
		 if(d.code==topicSelected)

		 	return 0.15;
		 else 
		 	return 0.65;
		}) ;
	}


	    		