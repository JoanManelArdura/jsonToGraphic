package io.jardura.components;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GraphicController {
	
	@Autowired
	private GraphicService graServ;
	
	//we only have 1 act of listening so far
	
	@RequestMapping(method=RequestMethod.POST,value="/graphic")
	public void addGraphic(Graphic graphic) {
		System.out.println("rebut");
		graServ.addGraphic(graphic);
	}

}
