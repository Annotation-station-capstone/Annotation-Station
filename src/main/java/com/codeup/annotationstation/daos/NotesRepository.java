package com.codeup.annotationstation.daos;

import com.codeup.annotationstation.Models.Note;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NotesRepository extends JpaRepository<Note,Long> {
}
