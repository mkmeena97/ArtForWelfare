using System;
using System.Collections.Generic;

namespace ArtForWelfare.Models;

public partial class User
{
    public int UserId { get; set; }

    public string UserName { get; set; } = null!;

    public string Password { get; set; } = null!;

    public string Email { get; set; } = null!;

    public int RoleId { get; set; }

    public int QueId { get; set; }

    public string Answer { get; set; } = null!;

    public bool Approve { get; set; }

    public virtual ICollection<Admin> Admins { get; set; } = new List<Admin>();

    public virtual ICollection<Artist> Artists { get; set; } = new List<Artist>();

    public virtual ICollection<Customer> Customers { get; set; } = new List<Customer>();

    public virtual ICollection<Ngo> Ngos { get; set; } = new List<Ngo>();

    public virtual Question Que { get; set; } = null!;

    public virtual Role Role { get; set; } = null!;
}
