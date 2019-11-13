package io.jardura.components;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Graphic {
	@Id
	static int id;
	private String nom;
	private int[] llista;
}
