
package Resource;

import Domain.Product;
import Domain.User;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import javax.transaction.Transactional;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.GenericEntity;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Transactional
@Path("product")
public class ProductService 
{
    @PersistenceContext
    private EntityManager em;
    
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response getAllProducts()
    {
                TypedQuery<Product> cp = em.createNamedQuery("Product.getAllProducts", Product.class);
                List<Product> products =cp.getResultList();                
                return Response.ok(new GenericEntity<List<Product>>(products){}).build();

    }
    @GET
    @Path("{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getProduct(@PathParam("id")int id)
    {
        if(id == 0)
        {
            return Response.status(Response.Status.BAD_REQUEST).build();
        }
        Product product = em.find(Product.class, id);
        if(product == null)
        {
            return Response.status(Response.Status.NOT_FOUND).build();
        }
        return Response.ok(new GenericEntity<Product>(product){}).build();
    }
    @DELETE
    @Path("{id}")
    public Response deleteProduct(@PathParam("id")int id)
    {
        if(id == 0)
        {
            return Response.status(Response.Status.BAD_REQUEST).build();
        }
        Product product = em.find(Product.class, id);
        if(product == null)
        {
            return Response.status(Response.Status.NOT_FOUND).build();
        }
        em.remove(product);
        return Response.ok().build();
    }
    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    public Response createProduct(Product newProduct)
    {
        if(newProduct !=null)
        {
         
            newProduct.setId(0);   
            em.persist(newProduct);
            return Response.ok(newProduct).build();
            
        }
        else
        {
            return Response.status(Response.Status.FORBIDDEN).build();
        }
    }
}
