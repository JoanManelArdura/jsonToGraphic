package io.jardura.components;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class GraphicService {
	@Autowired
	private GraphicRepository graRepo;
	
	public GraphicService(GraphicRepository graRepo) {
		this.graRepo=graRepo;
	}
	
	public void addGraphic(Graphic graphic){
		graRepo.save(graphic);
	}
	
	public Optional<Graphic> getGraphic(int id) {
		return graRepo.findById(id);
	}
	
	public List<Graphic> getAllGraphics() {
		List<Graphic> llista = new ArrayList<>();
		graRepo.findAll().forEach(llista::add);
		return llista;
	}
	
	
	
	
	
}
