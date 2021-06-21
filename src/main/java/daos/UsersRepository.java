package daos;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UsersRepository extends JpaRepository<com.codeup.annotationstation.Models.User, Long> {
}
