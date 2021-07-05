package com.codeup.annotationstation.daos;

import com.codeup.annotationstation.Models.Video;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VideoRepository extends JpaRepository<Video, Long> {
    Video findVideoBySectionId(long id);
}
