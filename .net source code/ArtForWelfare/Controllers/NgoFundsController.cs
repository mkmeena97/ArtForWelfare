using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ArtForWelfare.Models;

namespace ArtForWelfare.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NgoFundsController : ControllerBase
    {
        private readonly AfsContext _context;

        public NgoFundsController(AfsContext context)
        {
            _context = context;
        }

        // GET: api/NgoFunds
        [HttpGet]
        public async Task<ActionResult<IEnumerable<NgoFund>>> GetNgoFunds()
        {
          if (_context.NgoFunds == null)
          {
              return NotFound();
          }
            return await _context.NgoFunds.ToListAsync();
        }

        // GET: api/NgoFunds/5
        [HttpGet("{id}")]
        public async Task<ActionResult<NgoFund>> GetNgoFund(int id)
        {
          if (_context.NgoFunds == null)
          {
              return NotFound();
          }
            var ngoFund = await _context.NgoFunds.FindAsync(id);

            if (ngoFund == null)
            {
                return NotFound();
            }

            return ngoFund;
        }
        [HttpGet]
        [Route("ondate")]
        public async Task<ActionResult<IEnumerable<object>>> GetNgoFundByDate(DateTime startdate, DateTime enddate)
        {
            var ngofunds = await _context.NgoFunds
                .Include(n => n.Ngo)
                .Include(n => n.Art)
                .Where(n => n.Datetime >= startdate && n.Datetime <= enddate)
                .Select(n => new
                {
                    NgoName = n.Ngo.NgoName,
                    ArtName = n.Art.ArtName,
                    Amount = n.Amount,
                    Datetime = n.Datetime
                })
                .ToListAsync();

            if (ngofunds == null)
            {
                return null;
            }
            else
            {
                return ngofunds;
            }
        }

        /* //[HttpGet("{ngoId}")]
         [HttpGet("{ngoId:int}")]
         public async Task<ActionResult<NgoFund>> GetNgoFundByNgoId(int ngoId)
         {
             if (_context.NgoFunds == null)
             {
                 return NotFound();
             }

             var ngoFund = await _context.NgoFunds.FindAsync(ngoId);

             if (ngoFund == null)
             {
                 return NotFound();
             }


             return ngoFund;
         }
     */


        [HttpGet("ngoid/{ngoId}")]
        public async Task<ActionResult<IEnumerable<NgoFund>>> GetNgoFundsByNgoId(int ngoId)
        {
            var ngoFundsByNgoId = await _context.NgoFunds.Where(nf => nf.NgoId == ngoId).ToListAsync();

            if (ngoFundsByNgoId == null || ngoFundsByNgoId.Count == 0)
            {
                return null;
            }

            return ngoFundsByNgoId;
        }


        /* // PUT: api/NgoFunds/5
         // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
         [HttpPut("{id}")]
         public async Task<IActionResult> PutNgoFund(int id, NgoFund ngoFund)
         {
             if (id != ngoFund.NfId)
             {
                 return BadRequest();
             }

             _context.Entry(ngoFund).State = EntityState.Modified;

             try
             {
                 await _context.SaveChangesAsync();
             }
             catch (DbUpdateConcurrencyException)
             {
                 if (!NgoFundExists(id))
                 {
                     return NotFound();
                 }
                 else
                 {
                     throw;
                 }
             }

             return NoContent();
         }

         // POST: api/NgoFunds
         // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
         [HttpPost]
         public async Task<ActionResult<NgoFund>> PostNgoFund(NgoFund ngoFund)
         {
           if (_context.NgoFunds == null)
           {
               return Problem("Entity set 'AfsContext.NgoFunds'  is null.");
           }
             _context.NgoFunds.Add(ngoFund);
             await _context.SaveChangesAsync();

             return CreatedAtAction("GetNgoFund", new { id = ngoFund.NfId }, ngoFund);
         }

         // DELETE: api/NgoFunds/5
         [HttpDelete("{id}")]
         public async Task<IActionResult> DeleteNgoFund(int id)
         {
             if (_context.NgoFunds == null)
             {
                 return NotFound();
             }
             var ngoFund = await _context.NgoFunds.FindAsync(id);
             if (ngoFund == null)
             {
                 return NotFound();
             }

             _context.NgoFunds.Remove(ngoFund);
             await _context.SaveChangesAsync();

             return NoContent();
         }*/

        private bool NgoFundExists(int id)
        {
            return (_context.NgoFunds?.Any(e => e.NfId == id)).GetValueOrDefault();
        }
    }
}
