import ProjectCard from "./components/ProjectCard";
// import { IProject } from "@/models/Project"; // Import the interface

// This function fetches data on the server side
async function getProjects() {
  // We use the absolute URL for server-side fetching
  const apiUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}/api/projects`
    : 'http://localhost:3000/api/projects';

  const res = await fetch(apiUrl, {
    // Revalidate every hour to fetch new projects
    next: { revalidate: 3600 }
  });

  if (!res.ok) {
    throw new Error('Failed to fetch projects');
  }

  const { data } = await res.json();
  return data;
}

export default async function Home() {
  // const projects: IProject[] = await getProjects();

  return (
    <main className="max-w-5xl mx-auto px-4 py-16">
      {/* Hero Section */}
      <section className="text-center py-20">
        <h1 className="text-5xl font-bold text-gray-900">Creative UI/UX Designer</h1>
        <p className="mt-4 text-lg text-gray-600">I design beautiful and functional user experiences.</p>
      </section>

      {/* Projects Section */}
      {/* <section id="projects">
        <h2 className="text-3xl font-bold text-center mb-12">My Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects && projects.length > 0 ? (
            projects.map((project) => (
              <ProjectCard
                key={project.slug}
                slug={project.slug}
                title={project.title}
                description={project.description}
                imageUrl={project.imageUrl}
              />
            ))
          ) : (
            <p className="text-center col-span-2">No projects found. Add some to your database!</p>
          )}
        </div>
      </section> */}
    </main>
  );
}
// ```

// Now, when you run `npm run dev`, your homepage will fetch projects directly from your MongoDB Atlas database!

// ### **Step 2: Push Your Code to a Git Repository**

// Vercel deploys directly from a Git repository.

// 1.  **Create a GitHub Repository:** Go to [GitHub](https://github.com) and create a new, empty repository. Do not initialize it with a README.
// 2.  **Initialize Git locally:** In your project's terminal, run:
//     ```bash
//     git init -b main
//     git add .
//     git commit -m "Initial commit: Setup portfolio project"
//     ```
// 3.  **Link and Push:** Copy the commands from your new GitHub repository page to link your local project and push your code. It will look like this:
//     ```bash
//     git remote add origin [https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git](https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git)
//     git push -u origin main
//     ```

// ### **Step 3: Deploy to Vercel**

// 1.  **Sign up for Vercel:** Go to [vercel.com](https://vercel.com) and sign up with your GitHub account. It's free for personal projects.
// 2.  **Import Your Project:**
//     * On your Vercel dashboard, click **Add New...** > **Project**.
//     * Find your portfolio repository in the list and click **Import**.
// 3.  **Configure the Project:**
//     * Vercel will automatically detect that it's a Next.js project. You shouldn't need to change any build settings.
//     * **Crucially, you must add your environment variable.** Expand the **Environment Variables** section.
//     * Add a new variable with the key `MONGODB_URI`.
//     * For the value, paste in your full MongoDB connection string (the same one from your `.env.local` file).
//     * Click **Add**.
// 4.  **Deploy:** Click the **Deploy** button.

// Vercel will now build and deploy your application. It will take a minute or two. Once it's done, you'll be given a URL where you can see your live portfolio! 

// ### **Step 4: Continuous Deployment**

// Congratulations, your portfolio is live!

// The best part about this setup is the **continuous deployment**. Every time you push a new commit to your `main` branch on GitHub, Vercel will automatically trigger a new build and deploy the changes.

// **Your workflow now looks like this:**
// 1.  Make changes to your code locally (e.g., improve styling, add a new page).
// 2.  Add or update projects in your MongoDB Atlas database.
// 3.  Commit and push your code changes to GitHub.
// 4.  Vercel handles the rest, and your live site is updated within minutes.

// You have successfully built a full-stack portfolio website from scratch and deployed it globally!
