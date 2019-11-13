package io.jardura.components;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GraphicRepository extends CrudRepository <Graphic , Integer>{

}
