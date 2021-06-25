package com.codeup.annotationstation.daos;

import com.codeup.annotationstation.Models.Note;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NoteRepository extends JpaRepository<Note, Long> {

    Note findByTitle(String title);

    Note findFirstByTitle(String title);
}
