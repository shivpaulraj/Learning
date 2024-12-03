import java.util.concurrent.CompletableFuture;

public class NonBlockingCompletableFutureExample {

    public static void main(String[] args) {
        System.out.println("Main thread starts.");

        // Start an asynchronous task using CompletableFuture
        CompletableFuture<Void> future = CompletableFuture.runAsync(() -> {
            try {
                Thread.sleep(2000); // Simulate some delay
                System.out.println("Async task completed after 2 seconds.");
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
        });

        // Continue with other tasks in the main thread without blocking
        System.out.println("Main thread continues executing while async task runs...");

        // Wait for the async task to complete (optional, just for demonstration)
        future.join();

        System.out.println("Main thread ends.");
    }
}


Explanation:
CompletableFuture.runAsync() runs a task asynchronously without blocking the main thread.
The main thread continues to execute other tasks while the asynchronous task runs in parallel.
future.join() is used to block until the asynchronous task completes, but this could be skipped in a real-world scenario if you don't need to wait for the result immediately.

