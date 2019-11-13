package io.jardura.components;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Graphic {
	
	@GeneratedValue
	@Id
	int id;
	private String title;
	private int[] valuesToShow;
	
	
	
	public Graphic(int id, String title, int[] valuesToShow) {
		super();
		this.id = id;
		this.title = title;
		this.valuesToShow = valuesToShow;
		id++;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public int[] getValuesToShow() {
		return valuesToShow;
	}
	public void setValuesToShow(int[] valuesToShow) {
		this.valuesToShow = valuesToShow;
	}
	
}
