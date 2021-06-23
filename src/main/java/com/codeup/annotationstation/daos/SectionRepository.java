package com.codeup.annotationstation.daos;

import com.codeup.annotationstation.Models.Collection;
import com.codeup.annotationstation.Models.Section;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SectionRepository extends JpaRepository<Section, Long> {

}
