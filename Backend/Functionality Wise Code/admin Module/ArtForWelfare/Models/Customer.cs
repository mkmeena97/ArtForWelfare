using System;
using System.Collections.Generic;

namespace ArtForWelfare.Models;

public partial class Customer
{
    public int CustId { get; set; }

    public int UserId { get; set; }

    public string Fname { get; set; } = null!;

    public string? Lname { get; set; }

    public int? AreaId { get; set; }

    public string? Address { get; set; }

    public string Contact { get; set; } = null!;

    public virtual Area? Area { get; set; }

    public virtual ICollection<Order> Orders { get; set; } = new List<Order>();

    public virtual User User { get; set; } = null!;
}
