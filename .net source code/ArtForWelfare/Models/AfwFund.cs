using System;
using System.Collections.Generic;

namespace ArtForWelfare.Models;

public partial class AfwFund
{
    public int AfwfId { get; set; }

    public int ArtId { get; set; }

    public decimal? Amount { get; set; }

    public DateTime Datetime { get; set; }

    public virtual Art Art { get; set; } = null!;
}
