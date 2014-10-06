package Resource;

import Domain.User;
import static java.lang.System.console;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import javax.transaction.Transactional;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.FormParam;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.GenericEntity;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;


@Path("user")
@Transactional
public class UserService 
{
    @PersistenceContext
    private EntityManager em;
   
    @GET
    @Path("{email}/{password}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response login(@PathParam("email")String email, @PathParam("password")String password)
    {
        if(email == null || password == null)
        {
             return Response.status(Response.Status.BAD_REQUEST).build();
        }
            
        TypedQuery<User> cp = em.createNamedQuery("user.getUser", User.class);
        cp.setParameter("email", email);
        cp.setParameter("password", password);
        User us =cp.getSingleResult();
                
        return Response.ok(new GenericEntity<User>(us){}).build();
    }
    
    @GET
    @Path("{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getUser(@PathParam("id")int id)
    {
        User us = em.find(User.class, id);
        
        if(us == null)
        {
             return Response.status(Response.Status.BAD_REQUEST).build();
        }
       else
        { 
            return Response.ok(new GenericEntity<User>(us){}).build();
        }
       
    }
    
    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    public Response addUser(User us)
    {

        if(us !=null)
        {
         
            us.setId(0);   
            em.persist(us);
            return Response.ok(us).build();
            
        }
        else
        {
            return Response.status(Response.Status.FORBIDDEN).build();
        }

        
    }
    
    @PUT
    @Path("{id}")
    @Consumes(MediaType.APPLICATION_JSON)
    public Response alterProduct(@PathParam("id")int id, User newUser)
    {
        if(id == 0)
        {
            return Response.status(Response.Status.BAD_REQUEST).build();
        }
        User oldUser = em.find(User.class, id);
        
        if(newUser.getHomeNumber()!= 0)
        {
            oldUser.setHomeNumber(newUser.getHomeNumber());
        }
        if(newUser.getLastname()!=null)
        {
            oldUser.setLastname(newUser.getLastname());
        }
        if(newUser.getMunicipality()!=null)
        {
            oldUser.setMunicipality(newUser.getMunicipality());
        }
        if(newUser.getName()!=null)
        {
            oldUser.setName(newUser.getName());
        }
       if(newUser.getStreet()!=null)
        {
            oldUser.setStreet(newUser.getStreet());
        }
       if(newUser.getZipcode()!=0)
        {
            oldUser.setZipcode(newUser.getZipcode());
        }

        
        em.persist(oldUser);
        return Response.ok(new GenericEntity<User>(oldUser){}).build();
    }

    
    
}
