
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Index = () => {
  const teamMembers = [
    {
      name: "Terri Stojceski",
      title: "Founder, Design Director",
      avatar: "/placeholder.svg"
    },
    {
      name: "Kelly Savala",
      title: "Brand & Messaging Director",
      avatar: "/placeholder.svg"
    },
    {
      name: "Shane Reynolds",
      title: "Strategy Director",
      avatar: "/placeholder.svg"
    },
    {
      name: "Lindsay Watson",
      title: "Art Director",
      avatar: "/placeholder.svg"
    },
    {
      name: "Chung Schlueter",
      title: "Head of Product Management",
      avatar: "/placeholder.svg"
    },
    {
      name: "David Bell",
      title: "Lead Developer",
      avatar: "/placeholder.svg"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center p-8">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left side content */}
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold text-green-600 leading-tight mb-6">
              It's different working with us
            </h1>
            
            <div className="space-y-4 text-gray-700 text-lg leading-relaxed mb-8">
              <p>
                We curate senior leadership and creative for each client, so there's no one-size-fits-all solution. This approach ensures you get the deep knowledge that comes with experience in your industry, and a flat.
              </p>
            </div>
            
            <div className="text-sm text-gray-500 mb-6">
              Image from Freepik
            </div>
            
            <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-md text-base font-medium">
              read more
            </Button>
          </div>
        </div>

        {/* Right side - Team members */}
        <div className="space-y-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex items-center space-x-4 pb-4 border-b border-gray-300">
              <Avatar className="w-16 h-16 border-4 border-green-500">
                <AvatarImage src={member.avatar} alt={member.name} />
                <AvatarFallback className="bg-green-100 text-green-700 font-semibold">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-bold text-gray-900 text-lg">
                  {member.name}
                </h3>
                <p className="text-gray-600 italic">
                  {member.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
