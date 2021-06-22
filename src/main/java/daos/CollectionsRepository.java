package daos;

import models.Collection;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CollectionsRepository extends JpaRepository<Collection, Long> {

    Collection findByTitle(String title);

    Collection findFirstByTitle(String title);
}
