using Ecommerce.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Ecommerce.Controller
{
    [Route("api/[controller]")]
    [ApiController]
    public class productController : ControllerBase
    {
        private readonly EcommerceEntity context;

        public productController(EcommerceEntity context)
        {
            this.context = context;
        }
        [HttpGet]
        public IActionResult getAll()
        {
            List<product> products = context.products.ToList();
            if (products == null)
                return BadRequest("There is non categories");
            return Ok(products);
        }
        [HttpGet("{id:int}", Name = "getProductById")]
        public IActionResult getById(int id)
        {
            product product= context.products.FirstOrDefault(p => p.id == id);
            if (product == null)
                return BadRequest("product is not found");
            return Ok(product);

        }
        [HttpPost]
        public IActionResult New(product product)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    context.products.Add(product);
                    context.SaveChanges();
                    string url = Url.Link("getProductById", new { id = product.id });
                    return Created(url, product);
                }
                catch (Exception ex)
                {
                    return BadRequest(ex.Message);
                }

            }
            return BadRequest(ModelState);
        }
        [HttpPut("{id:int}")]
        public IActionResult Edit(int id, product product)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    product oldProduct =
                        context.products.FirstOrDefault(p => p.id == id);
                    oldProduct.name = product.name;
                    oldProduct.price = product.price;
                    oldProduct.quantity = product.quantity;
                    oldProduct.image = product.image;
                    oldProduct.catId = product.catId;
                    
                    context.SaveChanges();

                    return StatusCode(204, "Data Saved");
                }
                catch (Exception ex)
                {
                    return BadRequest(ex.Message);

                }

            }
            return BadRequest(ModelState);
        }
    }
}
