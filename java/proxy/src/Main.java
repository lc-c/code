import java.lang.reflect.InvocationHandler;
import java.lang.reflect.Proxy;

public class Main {

    public static void main(String[] args) {
        Object value = 360;
        InvocationHandler invocationHandler = new Handler(360);
        Class[] infaces = new Class[]{Comparable.class};
        Object Proxy = java.lang.reflect.Proxy.newProxyInstance(null,infaces,invocationHandler);
        System.out.println(Proxy);
    }
}
