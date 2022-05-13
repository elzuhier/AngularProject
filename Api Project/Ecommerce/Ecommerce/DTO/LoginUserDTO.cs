using System.ComponentModel.DataAnnotations;

namespace Ecommerce.DTO
{
    public class LoginUserDTO
    {
        [Required(ErrorMessage ="Username is required")]
        [MinLength(5, ErrorMessage = "Should be 5 characters or more")]
        public string username { get; set; }
        [Required(ErrorMessage ="Password is required")]
        public string password { get; set; }
    }
}
