package com.codeup.annotationstation.daos;

import com.codeup.annotationstation.Models.Tag;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TagRepository extends JpaRepository <Tag,Long> {
}
